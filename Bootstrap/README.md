# Bootstrap 4.4.1 Project

## Table of Contents
1. [Introduction](#introduction)
2. [Learning Objectives](#learning-objectives)
3. [Requirements](#requirements)
4. [Usage of Containers](#usage-of-containers)
5. [Usage of the Grid System](#usage-of-the-grid-system)
6. [Usage of Components](#usage-of-components)
7. [Usage of Utilities](#usage-of-utilities)
8. [References](#references)

## Introduction
This project is designed to provide a comprehensive understanding of Bootstrap 4.4.1, focusing on the CSS styling components. Bootstrap is a popular open-source CSS framework that enables responsive and mobile-first front-end web development. It includes a variety of CSS and JavaScript design templates for typography, forms, buttons, navigation, and other interface components.

## Learning Objectives
By the end of this project, you should be able to:
- Utilize Bootstrap containers effectively.
- Apply Bootstrap's grid system to create responsive layouts.
- Use various Bootstrap components to enhance user interfaces.
- Leverage Bootstrap utilities for common styling needs.

## Requirements
- A `README.md` file at the root of the project folder is mandatory.
- Use Bootstrap version 4.4.1.
- Focus only on the CSS styling part of Bootstrap.

## Usage of Containers
Containers are the fundamental building blocks of Bootstrap's grid system, providing padding and aligning content within a specified width. There are three types of containers in Bootstrap 4.4.1:
1. **`.container`**: A responsive fixed-width container.
2. **`.container-fluid`**: A full-width container spanning the entire width of the viewport.
3. **`.container-{breakpoint}`**: A responsive container with a maximum width determined by the breakpoint.

### Example
```html
<div class="container">
  <!-- Content here -->
</div>

<div class="container-fluid">
  <!-- Full-width content here -->
</div>
