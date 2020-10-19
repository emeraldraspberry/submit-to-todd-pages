$.get('./patch_notes.html', null, data => {
  let main = $(data).filter('main');
  $(main).children('section').each((x, elem) => {
    let title = $(elem).children('.p-title');
    let new_text = title.text().replace("Patch Notes", "");
    title = title.text(new_text);
   
    let subtitles = $(elem).children('.p-lessertitle');

    let container = $('#patch-notes-summary');
    container.append(title);

    container.append($('<div>'));
    container = $('#patch-notes-summary > div');
    

    
    subtitles.each((x, subtitle) => {
      let div = $(elem).contents().filter(subtitle).nextUntil(':not(section)')
      .children('div');

      // Check for div content, set up unique div container for layout if true
      if (div.text() !== "") {
        container.append($('<div>', {id: x}));
      // Append the element at the end. Appending early will mess traversal.
      container.children('div#' + x).append(subtitle);
      container.children('div#' + x).append(div);
      } else {
        // Continue
      }
      
    });

    return false;
  });
});