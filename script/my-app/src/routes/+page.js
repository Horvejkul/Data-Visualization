import Papa from 'papaparse'

export const ssr = false;

export const load = async ({ fetch }) => {
    const responseCustomers = await fetch('http://localhost:5173/Customers.csv', {
        headers: {
          'Content-Type': 'text/csv'
      }})
      let csvCustomers = await responseCustomers.text()
      let parsedCsvCustomers = Papa.parse(csvCustomers, {header: true})
  
      return {
        customers: parsedCsvCustomers.data
      }
  }