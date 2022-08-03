function Student(a,b,c,d,e){
    this.id=a;
    this.name=b;
    this.marks1=c;
    this.marks2=d;
    this.marks3=e;
    this.computeTotal=function(){
        return this.marks1+this.marks2+this.marks3;
    }
    this.computeAverage=function(){
       return (this.marks1+this.marks2+this.marks3)/3 ;
       
       
    }
  this.computeGrade=function(){
    
      if(this.computeAverage()>90 && this.computeAverage()<=100){
          return 'A';
      }
      else if(this.computeAverage()>70 && this.computeAverage()<=90){
        return 'B';
    }
    else if(this.computeAverage()>50 && this.computeAverage()<=70){
        return 'C';
    }
    else if(this.computeAverage()>39 && this.computeAverage()<=50){
        return 'D';
    }else{
        return "fail";
    }
  }

}  