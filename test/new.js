let n=6;
for(let i=0;i<n;i++){

  for (let j = 0; j < i; j++) {
    process.stdout.write("*");
  }
  
  for (let k = i; k < n; k++) {
    process.stdout.write(" ");
  }

  for (let j = 0; j < i; j++) {
    process.stdout.write("*");
  }

  process.stdout.write("\n");
}



for(let i=n;i>0;i--){
    for(let j=0;j<i;j++){
        process.stdout.write("*");
    }

    for (let k = i; k < n; k++) {
        process.stdout.write(" ");
      }

      for(let j=0;j<i;j++){
        process.stdout.write("*");
    }
    
    process.stdout.write("\n")
}


