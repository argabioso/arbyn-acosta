import { TREE_KEYMAP } from './preprocess.js';
import { showSidebar } from './sidebar.js';

function removeQueryParam(key) {
  const currentUrl = new URL(window.location);
  currentUrl.searchParams.delete(key);
  window.history.replaceState({}, '', currentUrl);
}

function decodeUrlSafeBase64ToUtf8(base64Str) {
  // Convert from URL-safe Base64 to standard Base64
  let base64 = base64Str.replace(/-/g, '+').replace(/_/g, '/');
  // Add padding if necessary
  while (base64.length % 4) {
      base64 += '=';
  }
  const binaryString = atob(base64);
  const utf8Bytes = Uint8Array.from(binaryString, char => char.charCodeAt(0));
  const utf8String = new TextDecoder().decode(utf8Bytes);
  return utf8String;
}

window.onload = () => {
  // Loop through all localStorage keys
  for (let i = 0; i < localStorage.length; i++) {
      // Get the key name
      let key = localStorage.key(i);

      // Check if the key starts with "family-tree-"
      if (key && key.startsWith('family-tree-')) {
          // Remove the key from localStorage
          localStorage.removeItem(key);
          // Since we've removed an item, adjust the index to account for the shift in the keys
          i--;
      }
  }

  // Show the copyright once everything loads up
  // document.querySelector('footer').classList.remove("hidden");

  // for (let fid in STORIES) {
  //   let person = TREE_FIDMAP[fid];
  //   if (isPrivate && person.living) {
  //     continue;
  //   }
  //   addPersonDetails({"data": person, "key": person.key});
  // }

  let Id = window.location.get("id");
  if (Id) {
    let decodedId = decodeUrlSafeBase64ToUtf8(Id);

    if (TREE_KEYMAP[decodedId]) {
      let node = {'key': decodedId, 'data': TREE_KEYMAP[decodedId]}
      showSidebar(node);
    }
  }

  const closeButton = document.getElementById('personDetails');
  closeButton.addEventListener('hide.bs.offcanvas', () => {
    const encodedKey = window.location.get("id");
    const sidebarContainer = document.getElementById('personDetailsDesc');

    localStorage.setItem(`family-tree-id-${encodedKey}-scroll`, sidebarContainer.scrollTop);

    removeQueryParam('id');
  });
};
