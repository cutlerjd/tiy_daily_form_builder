// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
let fields = document.getElementById( "fields")
let fieldsForm = document.createElement ( "form" )

fields.appendChild(fieldsForm)

formData.forEach(function(item){
  let arr_general = ['tel','email','text']
  if(arr_general.indexOf(item.type)>-1){
    let formInput = document.createElement( "input")
    formInput.setAttribute("id",item.id)
    formInput.setAttribute("type",item.type)
    formInput.setAttribute("placeholder",item.label)
    formInput.setAttribute("name",item.id)
    fieldsForm.appendChild(formInput)
  } else if(item.type == 'textarea') {
    let formTextArea = document.createElement( "textarea" )
    formTextArea.setAttribute("id",item.id)
    formTextArea.setAttribute("name",item.id)
    formTextArea.setAttribute("rows","10")
    formTextArea.setAttribute("placeholder",item.label)
    fieldsForm.appendChild(formTextArea)
  } else if(item.type ) {
    let formSelect = document.createElement( "select" )
    item.options.forEach(function(item){
      let selectOption = document.createElement( "option")
      selectOption.setAttribute("value",item.value)
      let selectOptionText = document.createTextNode(item.label)
      selectOption.appendChild(selectOptionText)
      formSelect.appendChild(selectOption)
    })
    fieldsForm.appendChild(formSelect)
  }
});
