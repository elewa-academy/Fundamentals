

## Project Specs

are they all met?

### Top Down

repo organization
readme
on portfolio
...

### Bottom up

tests
clear code
code specs matched

## Specific concerns



### Documentation

PR title?
PR description?
Linked issues?
Labels/Milestones/Assignees/Reviewers
README updated?
Commit messages
Coherent story?
Meaningless/repeated?

### Features

Tests & coverage
Do tests pass
Is the test output (test names, assertion names) meaningful?
Is the level of test coverage appropriate?
If a bug-fix, has a test been added to exercise the bug?
If tests have been added, are they meaningful?
Running & reproducibility
Can you manually use the feature that is being added/fixed?
If a bug-fix, can you manually establish that the bug is fixed?

### Implementation

Use what you discover in step 1 and step 2 to focus your attention in this step.

Consistent return types?
Consistent (or existent) error-handling?
Deeply nested code?
Lots of repetition?
Meaningful and concise naming?
Lots of branches (high cyclomatic complexity)?
Consistent code formatting?
If the project uses a linter, are there any linter warnings?
Readability/comprehensibility
Are other team members likely to be able to maintain it?
Appropriately commented?
Excessively large files?
Design issues
Mixed concerns
Leaky abstractions
Is the data flow clear?

### Security

Identify any areas that deal with user input or user data
Are there any API keys, encryption secrets, or credentials in the codebase?
Reviewing a Codebase

## Bottom Up

### Documentation

Is there a README?
Does the README:
explain the purpose of the codebase/application?
have a link to the live site (if appropriate)?
have instructions for installing & running the application?
have instructions for running tests?
Are dependencies explicitly declared?
Linked issues
Labels/Milestones/Assignees/Reviewers
Commit messages
Coherent story?
Meaningless/repeated?

### Features

Testing & coverage
Do tests pass
Is the level of test coverage appropriate?
If a bug-fix, has a test been added to exercise the bug?
Is the test output (test names, assertion names) meaningful?
Is the file structure clear/sensible?
Can you get the application(s) running?
Go through a few different user flows
Try to break things

### Implementation

Look at the parts of the codebase that are changing the most often. Also look at more critical parts of the codebase: business logic.

Consistent return types?
Consistent (or existent) error-handling?
Deeply nested code?
Lots of repetition?
Meaningful and concise naming?
Lots of branches (high cyclomatic complexity)?
Consistent code formatting?
If the project uses a linter, are there any linter warnings?
Readability/comprehensibility
Are other team members likely to be able to maintain it?
Appropriately commented?
Excessively large files?
Design issues
Mixed concerns
Leaky abstractions

### Security

Identify any areas that deal with user input or user data
Are there any API keys, encryption secrets, or credentials in the codebase?

___


This template is inspired by [founders and coders](https://github.com/foundersandcoders/master-reference/blob/master/coursebook/general/code-review.md#reviewing-pull-requests)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>