# Adding a new project

## 1. Upload image 
Upload an image to [miscellaneous](https://github.com/elena-aguilar/elena-aguilar.github.io/tree/master/images/miscellaneous) or [portfolio](https://github.com/elena-aguilar/elena-aguilar.github.io/tree/master/images/portfolio), depending on the project type. To upload click on **Add file** in the top right corner.

## 2. Add content
The content is written in [index.html](https://github.com/elena-aguilar/elena-aguilar.github.io/blob/master/index.html). Duplicate an existing project by copying from where`<!-- Project -->` starts to where `<!-- End Project -->` ends. 

You can also copy and paste the code below and adapt it:
- specify a `data-anchor` and `id`, make sure there are no spaces.
- specify the project title.
- add paragraphs, each should be wrapped like this `<p>...</p>`. If there is no description just remove all paragraphs.
- add images, use the same image name as the one uploaded to images folder.

```HTML
<!-- Project -->
<div data-anchor="example_project_name" id="example_project_name" class="project">
  <div class="row">
    <div class="col-md-12">
      <h2 class="project-title">Example Project Name</h2>
    </div>
    <div class="col-md-8">
      <div class="project-description">
        <p>Example project paragraph 1</p>
        <p>Example project paragraph 2</p>
        <p>Example project paragraph 3</p>
      </div>
    </div>
    <div class="col-md-3 offset-md-1">
      <div class="project-role">
        <div class="project-role-title">Role —</div>
        <p>Example project role 1</p>
        <p>Example project role 2</p>
        <p>Example project role 3</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <div class="project-item">
        <img src="images/portfolio/EXAMPLE_PROJECT_IMAGE_1.jpg" class="project-img lazy">
      </div>
      <div class="project-item">
        <img src="images/portfolio/EXAMPLE_PROJECT_IMAGE_2.jpg" class="project-img lazy">
      </div>
      <div class="project-item">
        <img src="images/portfolio/EXAMPLE_PROJECT_IMAGE_3.jpg" class="project-img lazy">
      </div>
    </div>
  </div>
</div>
<!-- End Project -->
```

## 3. Add menu link
In [index.html](https://github.com/elena-aguilar/elena-aguilar.github.io/blob/master/index.html) find the menu section that starts with `<!-- Menu -->`.

Add a new line by copying the code below and adapting it:
- specify a `data-scroll` and make sure it's the same one as the `id` specified in the project.
- specify the project title.


```HTML
<a href="" data-scroll="example_project_name" class="project-nav-item">Example Project Name</a>
```

