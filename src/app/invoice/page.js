import Invoice from '../../components/Invoice/Invoice'
import dynamic from "next/dynamic";

const page = () => {

  return (
    <div>
      <Invoice/>
    </div>
  );
};

export default dynamic(() => Promise.resolve(page), { ssr: false });

