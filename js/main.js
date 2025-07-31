document.addEventListener("DOMContentLoaded", function () {
  function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }

  function loadFromLocalStorage(key, defaultValue) {
    return localStorage.getItem(key) || defaultValue;
  }

  function makeEditable(element) {
    const storageKey = `editable_${element.className.replace(/\s+/g, "_")}`;
    const defaultValue = element.textContent;
    element.setAttribute('data-editable', 'true');

    element.textContent = loadFromLocalStorage(storageKey, defaultValue);

    element.addEventListener("dblclick", function () {
      this.classList.add('editing');
      const currentText = this.textContent;
      const input = document.createElement("input");
      input.type = "text";
      input.value = currentText;
      input.style.width = `${this.offsetWidth}px`;
      input.style.height = `${this.offsetHeight}px`;
      input.style.fontFamily = "Poppins, sans-serif";
      input.style.fontSize = window.getComputedStyle(this).fontSize;

      this.textContent = "";
      this.appendChild(input);
      input.focus();

      input.addEventListener("blur", function () {
        const newText = this.value.trim();
        element.textContent = newText || currentText;
        saveToLocalStorage(storageKey, newText);
        element.classList.remove('editing');
        element.classList.add('saved-effect');
        setTimeout(() => element.classList.remove('saved-effect'), 600);
      });

      input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          this.blur();
        }
      });
    });
  }

  function makeListItemsEditable() {
    document.querySelectorAll('.feature-point ul li').forEach((li, index) => {
      const storageKey = `editable_list_item_${index}`;
      const defaultValue = li.textContent;
      li.setAttribute('data-editable', 'true');

      li.textContent = loadFromLocalStorage(storageKey, defaultValue);

      li.addEventListener("dblclick", function () {
        this.classList.add('editing');
        const currentText = this.textContent;
        const textarea = document.createElement("textarea");
        textarea.value = currentText;
        textarea.style.width = `${this.offsetWidth}px`;
        textarea.style.fontFamily = "Poppins, sans-serif";
        textarea.style.fontSize = window.getComputedStyle(this).fontSize;

        this.textContent = "";
        this.appendChild(textarea);
        textarea.focus();

        textarea.addEventListener("blur", function () {
          const newText = this.value.trim();
          li.textContent = newText || currentText;
          saveToLocalStorage(storageKey, newText);
          li.classList.remove('editing');
          li.classList.add('saved-effect');
          setTimeout(() => li.classList.remove('saved-effect'), 600);
        });
      });
    });
  }

  function makeTagsEditable() {
    document.querySelectorAll('.edu-items span').forEach((span, index) => {
      const storageKey = `editable_edu-items_span_${index}`;
      const defaultValue = span.textContent;
      span.setAttribute('data-editable', 'true');

      span.textContent = loadFromLocalStorage(storageKey, defaultValue);

      span.addEventListener("dblclick", function () {
        this.classList.add('editing');
        const currentText = this.textContent;
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        input.style.width = `${this.offsetWidth}px`;
        input.style.fontFamily = "Poppins, sans-serif";
        input.style.fontSize = window.getComputedStyle(this).fontSize;

        this.textContent = "";
        this.appendChild(input);
        input.focus();

        input.addEventListener("blur", function () {
          const newText = this.value.trim();
          span.textContent = newText || currentText;
          saveToLocalStorage(storageKey, newText);
          span.classList.remove('editing');
          span.classList.add('saved-effect');
          setTimeout(() => span.classList.remove('saved-effect'), 600);
        });
      });
    });
  }

  function makeInterestsEditable() {
    document.querySelectorAll('.interest-item').forEach((item, index) => {
      const storageKey = `editable_interest-item_${index}`;
      const defaultValue = item.textContent;
      item.setAttribute('data-editable', 'true');

      item.textContent = loadFromLocalStorage(storageKey, defaultValue);

      item.addEventListener("dblclick", function () {
        this.classList.add('editing');
        const currentText = this.textContent;
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        input.style.width = `${this.offsetWidth}px`;
        input.style.fontFamily = "Poppins, sans-serif";
        input.style.fontSize = window.getComputedStyle(this).fontSize;

        this.textContent = "";
        this.appendChild(input);
        input.focus();

        input.addEventListener("blur", function () {
          const newText = this.value.trim();
          item.textContent = newText || currentText;
          saveToLocalStorage(storageKey, newText);
          item.classList.remove('editing');
          item.classList.add('saved-effect');
          setTimeout(() => item.classList.remove('saved-effect'), 600);
        });
      });
    });
  }

  document
    .querySelectorAll(
      ".title.name, .title.role, .title.your-language-first, " +
      ".title.your-language-second, .title.your-language-thrid, " +
      ".title.greeting-phrase, .title.language, .title.experience, " +
      ".experience-date.last-job, .role-name.last-job, " +
      ".company-name.last-job, .job-time.last-job, .experience-date.second, .experience-date.thrid,"+
      ".role-name.second, .role-name.thrid, .company-name.second-job, .company-name.thrid-job, .job-time.thrid-job,"+
      ".title.education, .edu-header.last, .edu-header.second, .edu-name.last, .edu-footer.last, .edu-name.second, .edu-footer.second, .edu-header.first, .edu-name.first, .edu-footer.first, .title.interest,"+
      ".title.contact-phrase, .title.mail"
    )
    .forEach(makeEditable);

  makeListItemsEditable();
  makeTagsEditable();
  makeInterestsEditable();
});
