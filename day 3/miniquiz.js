    let score = 0;
    let q1 = prompt(
      "Question 1:\nWhat is the capital of France?\n1. Berlin\n2. Paris\n3. Rome"
    );
    switch (q1) {
      case "2":
        score++;
        break;
    }
    let q2 = prompt(
      "Question 2:\nWhat is 2 + 2?\n1. 4\n2. 5\n3. 3"
    );
    switch (q2) {
      case "1":
        score++;
        break;
    }
    let q3 = prompt(
      "Question 3:\nWhich planet is known as the Red Planet?\n1. Earth\n2. Mars\n3. Jupiter"
    );
    switch (q3) {
      case "2":
        score++;
        break;
    }
    alert("Your Final Score: " + score + "/3");
    