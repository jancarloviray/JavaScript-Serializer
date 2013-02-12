//CODE BY: www.jancarloviray.com

//description: serializes form elements into name=value&name1=value1 etc...

function serialize(form){
  if(form.nodeName!=="FORM")throw Error('not a form element');
  var res = [];
  Array.prototype.forEach.call(form.elements, function(item,idx,list){
  switch (item.type){
    case 'radio':
    case 'checkbox':
      if (item.checked){
        res.push(item.name+"="+encodeURIComponent(item.value));
      }
      break;
    case 'select-one':
      res.push(item.name+"="+encodeURIComponent(item.value));
      break;
    case 'select-multiple':
      (function(){
        for( var i = 0; i < item.options.length; i++ ){
          if(item.options[i].selected){
            res.push(item.name+"="+encodeURIComponent(item.value));
          }
        }
      })();
      break;
    default:
      if(!item.name || !item.value)break; //if no name, prob not a data elem
      res.push(item.name+"="+encodeURIComponent(item.value));
      break;
    }
  });
  return res.join("&");
}