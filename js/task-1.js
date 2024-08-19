(function() {

    const listItems = Array.from(document.querySelectorAll('li.item'));
  
    console.log('Numbers of categories: ', listItems.length);
  
    listItems.map(el => {
      const title = el.firstElementChild;
      const elements = el.lastElementChild;
      console.log('Category: ', title.innerHTML);
      console.log('Elements: ', elements.children.length);
      
    })
  })();