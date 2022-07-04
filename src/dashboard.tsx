import RequireAuth from "./requireAuth"
import rectOne from './assets/rect-one.png';
import reactTwo from './assets/rect-two.png';
import breakdown from './assets/breakdown.png';
import bankfee from './assets/bankfee.png';
import internet from './assets/internet.png';
import marketing from './assets/marketing.png';
import transfer from './assets/transfer.png';
import Button from "./components/button";

const summaries = [
    {title: 'Money in', amount: 'N 5,650,000'},
    {title: 'Money out', amount: 'N 5,650,000'},
    {title: 'Difference', amount: 'N 5,650,000'}
]

const cashOutflows = [
    {title: 'Bank Fees', image: bankfee, amount: 'N250,000'},
    {title: 'Internet', image: internet, amount: 'N250,000'},
    {title: 'Marketing', image: marketing, amount: 'N250,000'},
    {title: 'Transfer', image: transfer, amount: 'N250,000'}
]

const Dashboard = () => {

    const handleBgChange = (param: string) => {
        switch(param) {
            case 'Bank Fees':
                return '#E900AE';
            case 'Internet':
                return '#17ECD4';
            case 'Marketing':
                return '#C155FF';
            case 'Transfer':
                return '#00EC47';
            default:
                return ''
        }
    }

    return (
        <>
            <div className="flex justify-between px-12 pt-10">
                <div>
                    <div className="text-2xl openListTitle">Welcome back, Kathy</div>
                    <div className="text-base openListTitle">Here's what has been happening in the last <span className="text-color underline">7 days</span></div>
                </div>
                <div>
                    <Button className={'btn w-full py-3 px-5 rounded text-sm'} text="Add a sub account" onClick={() => {}}/>
                </div>
            </div>

            <div className="flex justify-between px-12 py-4  mobileCont">
                    <div className="rounded bg-white px-8 py-4 m-4 w-6/12 mobileSection">
                        <div className="flex justify-between">
                            <div>
                            <div className="text-sm openListTitle">CURRENT ACCOUNT</div>
                            <div className="text-sm text-color-s">PROVIDUS BANK - 990653917</div>
                            </div>
                            <div>
                                <img src={rectOne} alt={'icon'}/>
                            </div>
                        </div>

                        <div className="mt-14 text-4xl openListTitle">N814,800<span className="text-2xl">.45</span></div>

                    </div>


                    
                    <div className="rounded bg-white px-8 py-4 m-4 w-6/12 mobileSection">
                        <div className="flex justify-between">
                            <div>
                            <div className="text-sm openListTitle">SAVINGS ACCOUNT</div>
                            <div className="text-sm text-color-s">SUB ACCOUNT - 123456789</div>
                            </div>
                            <div>
                            <img src={reactTwo} alt={'icon'}/>
                            </div>
                        </div>

                        <div className="mt-14 text-4xl openListTitle">N39,342<span className="text-2xl">.45</span></div>

                    </div>
            </div>

            <div className="flex justify-between px-12 mobileCont">
                <div className="rounded bg-white p-8 mx-4 w-7/12 mobileSection">
                    <div className="text-lg openListTitle mb-5">June summary</div>
                    <ul className="flex justify-between w-3/4 mb-4">
                        {summaries.map((summary: any, index: number) => (
                            <li key={index}>
                                <div className="text-sm	text-color-s">{summary.title}</div>
                                <div className="text-sm openListTitle">{summary.amount}</div>
                            </li>
                        ))}
                    </ul>
                    <img src={breakdown} alt="breakdown"/>
                </div>

                <div className="rounded bg-white p-6 mx-4 w-5/12 mobileSection-c">
                <div className="text-lg	openListTitle">Cash outflow</div>
                <ul>
                    {cashOutflows.map((cashflow: any, index: number) => (
                        <li className="flex justify-between items-center my-8" key={index}>
                             <div className="w-5/12 flex">
                                <div className="mr-4 p-2 rounded" style={{backgroundColor: handleBgChange(cashflow.title)}}>
                                    <img src={cashflow.image} alt={cashflow.title}/>
                                </div>
                                <div className="text-sm	text-color-s">{cashflow.title}</div>
                            </div>
                            <div className="w-6/12">
                                <div className="text-sm openListTitle">{'- ' + cashflow.amount}</div>
                                <div className="percentBg">
                                    <div className="percent"></div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </>
    )
}

export default RequireAuth(Dashboard)