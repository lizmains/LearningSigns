function navigateToDictionary() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('dictionary-page').style.display = 'flex';
  }

  function selectSign(word) {
    // Remove the "selected" class from all list items
    // const wordListItems = document.querySelectorAll('#word-list li');
    // wordListItems.forEach(item => item.classList.remove('selected'));

    // // Add the "selected" class to the clicked list item
    // const selectedWord = document.querySelector(`#word-list li:contains('${word}')`);
    // if (selectedWord) {
    //   selectedWord.classList.add('selected');
    // }

    // Replace 'your-video-source' with the actual video source for the selected sign
    const videoSource = `mp4-sources/${word.toLowerCase()}.mp4`;
    document.getElementById('selected-sign-video').src = videoSource;
  }

  // Helper function to filter words based on the search bar input
  function filterWords() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const wordListItems = document.querySelectorAll('#word-list li');

    wordListItems.forEach(item => {
      const word = item.textContent.toLowerCase();
      if (word.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }