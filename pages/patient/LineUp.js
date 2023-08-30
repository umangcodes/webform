import { useState, useEffect} from "react"
import SelectStep from "@/components/form/SelectStep"
import FormContext from "@/context/formContext"

function RegistrationMultipleStep() {

    
    useEffect(() => {

    },[])
  return (
    <FormContext>
        <div className="flex flex-col m-5 border items-center justify-center">
          <div className="flex flex-col">
              <div id="reg-form" className=" flex flex-col justify-center items-center m-2" >
                  <h1 className="text-xl font-semibold">Patient Registration</h1>                
                  <div id="verification-steps">
                    <SelectStep />
                  </div>
                </div>
            </div>
        </div>
    </FormContext>
  )
}

export default RegistrationMultipleStep