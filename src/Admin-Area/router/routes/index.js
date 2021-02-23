// ** Routes Imports
import AppRoutes from './Apps'
import FormRoutes from './Forms'
import DashboardRoutes from './Dashboards'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/dashboard/analytics'

// ** Merge Routes
const Routes = [
  ...AppRoutes,
  ...FormRoutes,
  ...DashboardRoutes,
]

export { DefaultRoute, TemplateTitle, Routes }
