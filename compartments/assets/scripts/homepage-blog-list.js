// GETS A COLLECTION
(function(){
  var path = window.location.pathname;
  if (path === '/') {
    $.ajax({
      method: 'get',
      url: 'https://ajnahuasca.airshipcms.io/api/aerostat_collection/blog?limit=5&order=desc&sort=published_on', 
      success: function(data){
        data.sort(function(a,b) {
          return new Date(a.published_on) - new Date(b.published_on);
        }).forEach(function(item){
          recentBlogPosts(item);
          // console.log(item);  
        });
        console.log(data);
      }
    });
  }
})();

// GETS A FIELD VALUE
function getFieldValue(data, fieldName) {
  var fieldValue;
  data.fields.forEach(function(field){
    if (field.value && field.variable_name === fieldName){
      if (field.type === 'image' && field.value[0]) {
        fieldValue = field.value[0].secure_url
      } else {
        fieldValue = field.value;
      }
    }
  });
  return fieldValue;
}

function recentBlogPosts(data) {
  // Creates Article Parts
  // 
  // Sets up Grid for Article listing
  var blogRow = $('<div></div>', {class:'row'});
  var blogArticleContainer = $('<div></div>', {class:'col-3 center-div article'});

  //Article Thumbnail Image
  var blogItemThumbnail = $('<div></div>', {class:'col-2 show_image'});
  var thumbnailValue = 'hero_image';
  var thumbnailUrl = getFieldValue(data, thumbnailValue);
  $(blogItemThumbnail).attr('style', 'background-image:url("' + thumbnailUrl + '")');

  // Text Container for Article Listing
  var blogTextContainer = $('<div></div>', {class:'col-4 article-list-text'});

  //Blog Article Title
  var blogArticleTitle = 'title';
  var blogItemTitle = $('<div><a>' + getFieldValue(data, blogArticleTitle) + '</a></div>', {class: 'article-list-title'});

  //Blog Publish Date
  var publishedDate = new Date(data.published_on);
  var blogItemPublishDate = $('<div><h4>' + publishedDate + '</h4></div>', {class:'article-list-date'});

  //Blog Summary Content
  var blogArticleSummary = 'content';
  var blogItemSummary = $('<div><p>' + getFieldValue(data, blogArticleSummary) + '</p></div>', {class:'article-list-content listing-summary'});

  //Builds Article Components
  $('.row').append(blogRow);
  $(blogRow).append(blogArticleContainer);
  $(blogArticleContainer).append(blogItemThumbnail);
  $(blogArticleContainer).append(blogTextContainer);
  $(blogTextContainer).append(blogItemTitle);
  $(blogTextContainer).append(blogItemPublishDate);
  $(blogTextContainer).append(blogItemSummary);
}


// // GETS MONTH
// function getMonth(monthNum){
//   var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   return months[monthNum];
// }

// function recentBlogPosts(data){
//   var blogListContainer = $('#blog-list');
//   var blogItem = $('<div></div>', { class: 'blog-item' });
//   var blogItemLeft = $('<div></div>', { class: 'blog-item-left' });
//   var blogItemThumbnail = $('<div></div>', { class: 'blog-item-thumbnail' });
//   var thumbnailValue = 'thumbnail_image';
//   var thumbnailUrl = getFieldValue(data, thumbnailValue);
//   $(blogItemThumbnail).attr('style', 'background-image:url("' + thumbnailUrl + '")');

//   var blogItemCategoriesList = $('<ul></ul>', { class: 'blog-item-categories show-for-medium' });
//   var mobileBlogItemCategoriesList = $('<ul></ul>', { class: 'blog-item-categories show-for-small' })[0];
//   var categories = data.categories.map(function(category){
//     var subtitleCategory = $('<li><a href="/blog/categories/' + category.permalink + '">' + category.title.toUpperCase() + '</a></li>');
//     return subtitleCategory;
//   });
//   var categoriesMobile = data.categories.map(function(category){
//     var subtitleCategory = $('<li><a href="/blog/categories/' + category.permalink + '">' + category.title.toUpperCase() + '</a></li>');
//     return subtitleCategory;
//   });
  
//   var blogItemRight = $('<div></div>', { class: 'blog-item-right' });

//   var blogItemTitleValue = 'title'
//   var blogItemTitle = $('<h2>' + getFieldValue(data, blogItemTitleValue) + '</h2>', { class: 'blog-item-title' });

//   var publishedDate = new Date(data.published_on);
//   if(getFieldValue(data, 'author')) {
//     var author = getFieldValue(data, 'author')[0].permalink.split('-').join(' ');
//     var date = $('<h4>By ' + capitalizeFirstLetter(author) + ' | ' + getMonth(publishedDate.getMonth()) + ' ' + publishedDate.getDate() + ', ' + publishedDate.getFullYear() + '</h4>', { class: 'blog-item-date' });
//   } else {
//     var date = $('<h4>' + getMonth(publishedDate.getMonth()) + ' ' + publishedDate.getDate() + ', ' + publishedDate.getFullYear() + '</h4>', { class: 'blog-item-date' });
//   }
  
//   var descriptionFieldName = 'short_description'
//   var description = $('<p>' + getFieldValue(data, descriptionFieldName) + '</p>', { class: 'blog-item-short-description' });

//   var button = $('<a></a>', { class: 'blog-item-link', href: data.slug });
//   var buttonText = $('<span>Read More &rsaquo;</span>', { class: 'text', href: data.slug });

//   // Build Components
//   $(blogListContainer).prepend(blogItem);

//   $(blogItem).append(blogItemLeft);
//   if(thumbnailUrl && thumbnailUrl.length > 0) {
//     $(blogItemLeft).append(blogItemThumbnail);
//   }
//   $(blogItemLeft).append(blogItemCategoriesList);
//   categories.forEach(function(category){
//     $(blogItemCategoriesList).append(category);
//   });

//   $(blogItem).append(blogItemRight);
//   $(blogItemRight).append(blogItemTitle);
//   $(blogItemRight).append(date);
//   $(blogItemRight).append(mobileBlogItemCategoriesList);
//   categoriesMobile.forEach(function(category){
//     $(mobileBlogItemCategoriesList).append(category);
//   });
//   if(getFieldValue(data, descriptionFieldName)) {
//     $(blogItemRight).append(description);
//   }
//   $(blogItemRight).append(button);
//   $(button).append(buttonText);
// }
// function capitalizeFirstLetter(string) {
//   if(string) {
//     return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});;
//   }
// }