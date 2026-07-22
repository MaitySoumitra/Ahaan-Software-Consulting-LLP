import Grid from "./components/Grid"
import ServiceBanner from "./components/ServiceBanner"
import {CallToAction} from "../home/components/CallToAction"


export const ServiceComponent = () => {
  return (
    <div>
      <ServiceBanner/>
      <Grid/>
      <CallToAction/>
    </div>
  )
}
