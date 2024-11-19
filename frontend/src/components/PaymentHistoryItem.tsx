interface PaymentHistoryItemProps {
    hacker: string;
    payday: string;
    reportId: string;
    amount: string;
    status: string;
}

const PaymentHistoryItem: React.FC<PaymentHistoryItemProps> = ({
    hacker,
    payday,
    reportId,
    amount,
    status
}) => {
    return (
        <tr className="bg-main1-2 text-white text-center">
            <td className="p-2">{hacker}</td>
            <td className="p-2">{payday}</td>
            <td className="p-2">{reportId}</td>
            <td className="p-2">{amount}</td>
            <td className={`p-2 ${status === 'Success' ? 'text-main2-1' : 'text-sub-1'}`}>{status}</td>
        </tr>
    );
};

export default PaymentHistoryItem;
