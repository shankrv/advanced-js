/**--- Coding Challenge # 7 ---**/

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
    a) question itself
    b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
    c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


// 1. fx-constructor
(function () {
  function Question(que, opt, ans) {
    this.que = que;
    this.opt = opt,
      this.ans = ans
    this.display = function (ques, rNum) {
      console.log(ques[rNum].que);
      for (var i = 0; i < ques[rNum].opt.length; i++) {
        console.log(i + ' - ' + ques[rNum].opt[i] + '\n');
      }
    }
    this.checkAns = function (sub) {
      return (sub == this.ans);
    }
  }

  // 2. Questions
  var Q1 = new Question('Which is the most common web-technology ?', ['HTML', 'CSS', 'JavaScript'], 2);
  var Q2 = new Question('Which is the most trending JS framework ?', ['Angular', 'React', 'Vue', 'Ember'], 1);
  var Q3 = new Question('Which is the most easy application part ?', ['Frontend', 'Backend', 'Database', 'Deployment', 'Scaling'], 0);

  // 3. Array Storage
  var ques = [Q1, Q2, Q3];

  // 4. Random Question
  var rNum;
  function randomQ(ques) {
    rNum = Math.floor(Math.random() * ques.length);
    ques[rNum].display(ques, rNum);
  }
  randomQ(ques);

  // 5. Prompt for Answer
  var sub = prompt('Write your answer here :');

  // 6. Check Answer Method
  console.log('Your answer is ' + ques[rNum].checkAns(sub));
})(); // 7. IIFE implementation


/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


(function () {
  function Question(que, opt, ans) {
    this.que = que;
    this.opt = opt,
      this.ans = ans
    this.display = function (ques, rNum) {
      console.log(ques[rNum].que);
      for (var i = 0; i < ques[rNum].opt.length; i++) {
        console.log(i + ' - ' + ques[rNum].opt[i] + '\n');
      }
      var sub = prompt('Write your answer here :');
      if (sub === 'exit') { // 9. Exit from Game
        console.log('Thank You for playing.')
        scores();
      } else {
        ques[rNum].checkAns(parseInt(sub));
      }
    }
    this.checkAns = function (sub) {
      if (sub === this.ans) {
        score += 1; // 10. Track Score
        console.log('Correct!');
        scores();
      } else {
        console.log('Incorrect!');
        scores();
      }
      next(ques); // 8. Next Question after result
    }
  }
  function scores() { // 11. Console - Scores
    console.log('Your score : ' + score);
  }

  var Q1 = new Question('Which is the most common web-technology ?', ['HTML', 'CSS', 'JavaScript'], 2);
  var Q2 = new Question('Which is the most trending JS framework ?', ['Angular', 'React', 'Vue', 'Ember'], 1);
  var Q3 = new Question('Which is the most easy application part ?', ['Frontend', 'Backend', 'Database', 'Deployment', 'Scaling'], 0);

  var ques = [Q1, Q2, Q3];
  var rNum = 0;
  var score = 0;
  function next(ques) {
    rNum = Math.floor(Math.random() * ques.length);
    ques[rNum].display(ques, rNum);
  }
  next(ques);
})();
