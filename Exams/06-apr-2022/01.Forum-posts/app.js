window.addEventListener("load", solve);

function solve() {
  const titleElem = document.getElementById('post-title');
  const categoryElem = document.getElementById('post-category');
  const contentElem = document.getElementById('post-content');
  const publishBtn = document.getElementById('publish-btn');
  const reviewUlElem = document.getElementById('review-list');
  const publishedElem = document.getElementById('published-list');
  const clearBtn = document.getElementById('clear-btn');

  publishBtn.addEventListener('click', function onPublish() {
    if (titleElem.value != '' && categoryElem.value != '' && contentElem.value != '') {

      const li = document.createElement('li');
      li.classList.add('rpost');

      const article = document.createElement('article');
      const title = document.createElement('h4');
      const category = document.createElement('p');
      const content = document.createElement('p');
      const editBtn = document.createElement('button');
      const approveBtn = document.createElement('button');

      title.textContent = titleElem.value;
      category.textContent = `Category: ${categoryElem.value}`;
      content.textContent = `Content: ${contentElem.value}`;

      editBtn.classList.add('action-btn');
      editBtn.classList.add('edit');
      editBtn.textContent = 'Edit';
      approveBtn.classList.add('action-btn');
      approveBtn.classList.add('approve');
      approveBtn.textContent = 'Approve';

      article.appendChild(title);
      article.appendChild(category);
      article.appendChild(content);

      li.appendChild(article);
      li.appendChild(editBtn);
      li.appendChild(approveBtn);

      reviewUlElem.appendChild(li);

      editBtn.addEventListener('click', function onEdit(e) {
        const parent = e.target.parentElement;
        titleElem.value = title.textContent;
        categoryElem.value = category.textContent.split(': ')[1];
        contentElem.value = content.textContent.split(': ')[1];
        parent.remove();
      });
      approveBtn.addEventListener('click', function onApprove(e) {
        const parent = e.target.parentElement;
        parent.removeChild(parent.lastChild);
        parent.removeChild(parent.lastChild);
        publishedElem.appendChild(parent);
      });

      titleElem.value = '';
      categoryElem.value = '';
      contentElem.value = '';
    }
  });
  clearBtn.addEventListener('click', function onClear() {
    Array.from(publishedElem.children).forEach(e => e.remove());
  });
}
