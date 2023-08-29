import { useEffect } from "react"
import {useFormik} from "formik"
import {Step1Schema} from "./validation/step1"
function Step1(props) {
    const formik = useFormik({
        initialValues:{
            healthcard: "",
            vc: "",
        },
        validationSchema: Step1Schema,
        onSubmit: (values) => {
            console.log(values)
        } 
    })

    useEffect(() => {
        console.log(formik.errors)
    },[formik.errors]) 

  return (
    <div className="">
        <div id="healthcard-number" className="flex flex-col">
            <label className="text-xl">Healthcard</label>
            <input placeholder="XXXX-XXX-XXX" id="healthcard" values={formik.values.healthcard} onChange={formik.handleChange} className="pl-5 text-lg border rounded-xl mt-1 mb-3"/>
        </div>

        <div id="version-code" className="flex flex-col">
            <label className="text-xl">Version Code</label>
            <input placeholder="VC" id="vc" values={formik.values.vc} onChange={formik.handleChange} className="pl-5 text-lg border rounded-xl mt-1 mb-3"/>
        </div>

        <button 
        type="button"
        // disabled={formik.errors} 
        className={`px-3 py-2 rounded-full border border-blue-500 ${formik.errors}`} onClick={() => (formik.handleSubmit(), props.setPage(val => val++))}>Next Page</button>
    </div>
  )
}

export default Step1