import './scss/all.scss';
import $ from 'jquery';

$('#login').click(function(){
  import(/*webpackChunkName:'login'*/'./js/login.js')
    .then(function(module){
      module.default();
    });
});

$('#register').click(function(){
  import(/*webpackChunkName:'register'*/'./js/register.js')
    .then(function(module){
      module.default();
    })
})

const a = () => {
  console.log('a');
}

a();

// let url = "%21" |> decodeURI;