const todos = [
  {
    id: 1,
    title: "go to school",
    completed: true
  },
  {
    id: 2,
    title: "go to museum",
    completed: true
  },
  {
    id: 3,
    title: "go to shopping",
    completed: false
  }
]

for ( let i in todos ) {
  console.log(i, todos[i]);
} 
