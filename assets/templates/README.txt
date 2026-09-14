HOW TO ADD YOUR OWN TEMPLATE IMAGES
====================================

1. Put your template photos in this folder (assets/templates/).
   Recommended: JPG or PNG, portrait orientation (4:5), at least 800x1000px.

2. Name them however you like, for example:
   template-01.jpg, template-02.jpg, etc.

3. Open script.js at the project root and find the "templates" array
   near the top. Update it to match your files, for example:

   const templates = [
     { name: "Été doré", image: "assets/templates/template-01.jpg", color: "yellow" },
     { name: "Nuit rose", image: "assets/templates/template-02.jpg", color: "pink" },
   ];

   - "name" is the label shown under the template and in the preview modal.
   - "image" is the path to your file.
   - "color" is only used as a placeholder gradient if the image fails to
     load — pick one of: pink, sky, yellow, lavender.

4. You can add or remove as many templates as you want — the gallery
   and the preview modal update automatically.

Until real images are added, the gallery automatically shows soft
color-gradient placeholders instead of broken image icons.
