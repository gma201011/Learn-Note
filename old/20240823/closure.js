const closure = () => {
  let i = 0;
  return () => {
    i++;
    console.log(i);
  }
}

const increment = closure(); // create closure

increment(); // 1
increment(); // 2
increment(); // 3