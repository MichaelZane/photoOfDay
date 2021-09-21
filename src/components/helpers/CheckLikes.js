export function CheckLikes(title) {
  const likedPics = localStorage.getItem(title || null);
  const prevLiked = likedPics === "true";
  return prevLiked
}

export function handleToggleLiked(toggleLiked, setToggleLiked, title) {
  setToggleLiked(!toggleLiked);
  toggleLiked
    ? localStorage.setItem(title, "false")
    : localStorage.setItem(title, "true");
};