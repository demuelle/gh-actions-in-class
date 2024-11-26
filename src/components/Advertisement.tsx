interface AdvertisementProps {
  companyName: string;
  productDescription: string;
  price: string;
}

// const thisIsNeverUsed = "oatmeal raisin cookie";

function Advertisement(props: AdvertisementProps) {
  return (
    <div className="advertisement">
      <p>While supplies last!!!</p>
      <p>{props.companyName}</p>
      <p>{props.productDescription}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default Advertisement;
