import { useSearchParams } from "react-router-dom";


function CodeQR(){
const [searchParams, setSearchParams] = useSearchParams();
const monto = searchParams.get("monto");
const concepto = searchParams.get("concepto");

return(

<div>
monto={monto}
concepto={concepto}
</div>


)
}
export default CodeQR;