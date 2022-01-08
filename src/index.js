import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//? =============================
//? < basic >

// //* basic function
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// //* es6 arrow function
// const Welcome = (props) => <h1>Hello, {props.name}</h1>;

// //* es6 class syntax
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// //* all these examples produce the same output

//? </ basic >
//? =============================

//? =============================
//? < rendering a component >

// const Welcome = (props) => <h1>Hello, {props.name}</h1>;

// const element = <Welcome name="Sara" />;

// ReactDOM.render(element, document.getElementById('root'));

//? </ rendering a component >
//? =============================

//TODO =============================
//TODO < render app! >

// const Welcome = (props) => <h1>Hello, {props.name}</h1>;

// function App() {
//   return (
//     <div>
//       <Welcome name="Miggels" />
//       <Welcome name="Fry" />
//       <Welcome name="Leela" />
//     </div>
//   );
// }
// ReactDOM.render(<App />, document.getElementById('root'));

//TODO </ render app! >
//TODO =============================

//? =============================
//? < extracting components unchanged version >

// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img
//           className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">{props.author.name}</div>
//       </div>

//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">{formatDate(props.date)}</div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };

// ReactDOM.render(
//   <Comment date={comment.date} text={comment.text} author={comment.author} />,
//   document.getElementById('root'),
// );

//? </ extracting components unchanged version >
//? =============================

//TODO =============================
//TODO < extracting components! >

//! bruh- it's toLocaleDate NOT toLocalDate
//! ya don forgot the EEEEeeeeEEeeeEEEeEEeeeEeEEeee ya wingbat

//! so much rage so so so much rage
// function formatDate(date) {
//   return date.toLocalDateString();
// }
//! so much rage so so so much rage

// const Avatar = (props) => {
//   return <img className="avatar" src={props.img} alt={props.altImg}></img>;
// };

// const UserInfo = (props) => {
//   return (
//     <div className="UserInfo">
//       <Avatar img={props.user.avatarUrl} altImg={props.user.name} />
//       <div className="UserInfo-Name">{props.user.name}</div>
//     </div>
//   );
// };

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="CommentText">{props.text}</div>
//       <div className="CommentDate">{formatDate(props.date)}</div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Mr. Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };

// ReactDOM.render(
//   <Comment date={comment.date} text={comment.text} author={comment.author} />,
//   document.getElementById('root'),
// );

//TODO </ extracting components! >
//TODO =============================

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById('root'),
);
