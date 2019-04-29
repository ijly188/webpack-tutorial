// import fun from './js/a';
// import './js/b';
// import fun1 from './js/c';

// import './css/a.css';
// import './css/b.css';
// import './css/c.css';
// import './scss/all.scss';

// fun();
// fun1();
import $ from 'jquery';

// import login from './js/login';
// import register from './js/register';

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