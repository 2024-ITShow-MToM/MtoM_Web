import Major from "../components/thinking/Major";

function MajorPage() {

    const majorData = [
        {
            text: 'S',
            major: '소프트웨어과'
        },

        {
            text: 'W',
            major: '웹솔루션과'
        },

        {
            text: 'D',
            major: '디자인과'
        }
    ]

    return (
        <Major majorData={majorData} />
    )
}

export default MajorPage;