document.getElementById("btn").addEventListener("click", function () {
  let text = document.getElementById("input-text").value;
  checkPalindrome(text);
});

function checkPalindrome(text) {
  let text_new = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let len = text_new.length;
  let halfLen = Math.floor(len / 2);
  let result = document.getElementById("result");
  let i;

  for (i = 0; i < halfLen; i++) {
    if (text_new[i] !== text_new[len - 1 - i]) {
      result.textContent = "Nope! Not  a palindrome";
      return;
    }
    result.textContent = "Yes! It's a palindrome";
  }
}
