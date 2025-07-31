document.getElementById("reset").addEventListener("click", function () {
  localStorage.removeItem("editable_title_name");
  localStorage.removeItem("editable_title_role");
  localStorage.removeItem("editable_title_your-language-first");
  localStorage.removeItem("editable_title_your-language-second");
  localStorage.removeItem("editable_title_your-language-thrid");
  localStorage.removeItem("editable_title_greeting-phrase");
  localStorage.removeItem("editable_title_language");
  localStorage.removeItem("editable_title_experience");
  localStorage.removeItem("editable_title_education");
  localStorage.removeItem("editable_title_interest");
  localStorage.removeItem("editable_title_contact-phrase");
  localStorage.removeItem("editable_title_mail");
  localStorage.removeItem("editable_experience-date_last-job");
  localStorage.removeItem("editable_experience-date_second");
  localStorage.removeItem("editable_experience-date_thrid");
  localStorage.removeItem("editable_role-name_last-job");
  localStorage.removeItem("editable_role-name_second");
  localStorage.removeItem("editable_role-name_thrid");
  localStorage.removeItem("editable_company-name_last-job");
  localStorage.removeItem("editable_company-name_second-job");
  localStorage.removeItem("editable_company-name_thrid-job");
  localStorage.removeItem("editable_job-time_last-job");
  localStorage.removeItem("editable_edu-header_last");
  localStorage.removeItem("editable_edu-header_second");
  localStorage.removeItem("editable_edu-header_first");
  localStorage.removeItem("editable_edu-name_last");
  localStorage.removeItem("editable_edu-name_second");
  localStorage.removeItem("editable_edu-name_first");
  localStorage.removeItem("editable_edu-footer_last");
  localStorage.removeItem("editable_edu-footer_second");
  localStorage.removeItem("editable_edu-footer_first");

  const listItems = document.querySelectorAll(".feature-point ul li");
  listItems.forEach((_, index) => {
    localStorage.removeItem(`editable_list_item_${index}`);
  });

  document.querySelectorAll(".edu-items span").forEach((_, index) => {
    localStorage.removeItem(`editable_edu-items_span_${index}`);
  });

  document.querySelectorAll(".interest-item").forEach((_, index) => {
    localStorage.removeItem(`editable_interest-item_${index}`);
  });

  location.reload();
});
