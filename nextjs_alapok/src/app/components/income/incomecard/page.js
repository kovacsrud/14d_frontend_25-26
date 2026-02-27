
export default function IncomeCard({ customer }) {

    return (
        <div className="m-5 card w-96 bg-red-300 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{customer.first_name} {customer.last_name}</h2>
                <p>Gender:{customer.gender}</p>
                <p>Income:{customer.household_income}</p>
                <p>Birthdate:{customer.birthdate}</p>
                <p>Phone:{customer.phone_number}</p>
                <p>Email:{customer.email}</p>

                <p></p>
                <div className="justify-end card-actions">
                    
                </div>
            </div>
        </div>
    )

}