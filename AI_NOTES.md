# AI_NOTES.md

# AI Usage Notes

This project was built using a combination of my own implementation and AI assistance (ChatGPT). AI was primarily used as a learning and review tool while I implemented the application.

---

## 1. Which parts were AI-generated vs. written by me

### Written by me
- Project setup and folder structure
- Express server configuration
- REST API implementation
- Controllers
- Services
- Routes
- File handling using `fs.promises`
- JSON file storage
- Express Validator integration
- CRUD operations
- Filtering expenses by category
- Total expense calculation
- Total expense by category
- Delete expense functionality
- Jest & Supertest test cases
- Swagger integration and endpoint documentation
- Debugging and fixing implementation issues

### AI-assisted
- Suggested improvements to project structure.
- Explained JavaScript concepts such as `JSON.stringify()`, `Array.reduce()`, `Array.filter()`, and file handling with `fs.promises`.
- Reviewed controller and service implementations and pointed out logical mistakes.
- Helped prepare Swagger documentation comments.
- Helped prepare the README.md and this AI_NOTES.md.

---

## 2. What I validated, tested, or changed

I reviewed every AI suggestion before adding it to the project.

Examples include:

- Fixed an issue where I was writing a single expense object to the JSON file instead of the complete expense array.
- Corrected the delete functionality to compare expense IDs instead of entire objects.
- Added validation for missing resources and invalid requests.
- Fixed routing and Swagger configuration issues.
- Verified every endpoint manually using Postman.
- Wrote and executed Jest & Supertest tests until all test cases passed successfully.

---

## 3. AI suggestions I decided not to use

Some AI suggestions were intentionally not used.

Examples include:

- I kept a simpler file-handling implementation instead of adding additional defensive checks for missing or empty JSON files because the assignment only required local JSON storage.
- I implemented a separate endpoint for total expenses by category to satisfy the assignment requirements rather than combining it with the overall total endpoint.
- I preferred simpler implementations where they were sufficient for the scope of the assignment.

---

## Summary

AI was used as a development assistant for explanations, debugging, documentation, and code review.

All code was reviewed, understood, tested, and modified where necessary before being included in the final submission.