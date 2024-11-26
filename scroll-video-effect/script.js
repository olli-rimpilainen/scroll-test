// Select the video element by its ID
const video = document.getElementById("scrollVideo");

// Add an event listener to detect scrolling
window.addEventListener("scroll", () => {
  // Get the current scroll position of the window
  const scrollPosition = window.scrollY;

  // Calculate the maximum scrollable height (total height minus viewport height)
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  // Determine the scroll fraction (how far down the page is scrolled as a percentage)
  const scrollFraction = scrollPosition / maxScroll;

  // Use the scroll fraction to set the video's current time
  const videoTime = scrollFraction * video.duration;

  // Update the video's current playback time
  video.currentTime = videoTime;
});
