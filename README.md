﻿# FormValidation
# Form Validation Project

## Overview

This project demonstrates a form validation example using HTML, CSS (Bootstrap), and plain JavaScript. The form includes the following fields:

- Full Name
- Email ID
- Phone Number
- Password
- Confirm Password

Validation criteria are applied to ensure that the data entered is relevant and correct.

## Validation Criteria

- **Full Name**: Must not be less than 5 characters.
- **Email ID**: Must contain the `@` character.
- **Phone Number**: Must be a 10-digit number and not be `123456789`.
- **Password**: Cannot be `password` or the user's name, and must be at least 8 characters long.
- **Confirm Password**: Must match the password.

Whenever any of the criteria are not met, an error message will be displayed.

## Technologies Used

- HTML
- CSS (Bootstrap for styling)
- JavaScript (Event listeners, multiple functions, loops, if/else statements)

## Project Structure
```code
form-validation-project/
│
├── index.html
├── script.js
├── README.md
└── styles.css
```

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/form-validation-project.git
    ```
2. Navigate to the project directory:
    ```bash
    cd form-validation-project
    ```

## Usage

Open `index.html` in your browser to view and test the form validation.

## Deployment

This project can be deployed using GitHub Pages or Netlify. Below are the steps to deploy on Netlify:

1. Create a repository on GitHub and push your project to the repository.
2. Go to [Netlify](https://www.netlify.com/) and log in.
3. Click on "New site from Git" and connect your GitHub repository.
4. Follow the prompts to deploy your site.

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is open-source and available under the MIT License.


## Acknowledgments

- Thanks to the creators of Bootstrap for the responsive design components.
- Thanks to the developers at Netlify for their easy-to-use deployment platform.
