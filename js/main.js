
$(window).on('load', function() {
  
  
  const fileActions = document.body.querySelectorAll(
    '.file .file-header .file-actions '
  );

  $.each(fileActions, function(i, val) {
    const containerEl = document.createElement('span');
    $(containerEl).append(
      "<button type='submit' onclick='prepareDownload()' class='customName btn btn-sm copy-pretty tooltipped tooltipped-n BtnGroup-item' aria-label='Download the file'>Download file</button>"
    );
    $(this).prepend(containerEl);
  });

  addEventListenerForRawLinks()

  
});

function download(filename, text) {
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  );
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}



// when button is clicked
function prepareDownload() {
  const gistText = document.getElementsByClassName('highlight tab-size js-file-line-container')[0].innerHTML;
  download("gist", gistText )
}

function addEventListenerForRawLinks() {
    var links = document.getElementsByClassName("customName");
    if (links !== null) {
        links[0].addEventListener('click', prepareDownload);
    }
}

