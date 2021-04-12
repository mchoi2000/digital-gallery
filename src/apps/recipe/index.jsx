import './index.scss';
import Card from './card';

export const Recipe = () => {
  return (
    <div className="wrapper">
      <Card 
        image="images/cup-salad.jpeg" 
        title="The Everyday Salad" 
        description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"
      />
      <Card 
        image="images/simple-risotto.jpeg" 
        title="Simple Risotto" 
        description="Fear Risotto no more! This simple recipe is perfect for family dinners."
      />
      <Card 
        image="images/cucumber-salad.jpeg" 
        title="Cucumber Wrap" 
        description="Need simple yet beautiful veggie dish for your party? This recipe is perfect for any special occasions!"
      />
    </div>
  );
}

