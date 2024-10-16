interface ItemTypes {
    id: number;
    qsn: string;
    ans: string;
}
export const accordionData: ItemTypes[] = [
    {
        id: 1,
        qsn: 'What is an accordion component?',
        ans: 'An accordion component is a UI element that allows users to expand and collapse sections of content, making it easier to manage large amounts of information.'
    },
    {
        id: 2,
        qsn: 'How do you create an accordion in React?',
        ans: 'You can create an accordion in React by using state to manage the expanded/collapsed state of each section and rendering the content conditionally based on that state.'
    },
    {
        id: 3,
        qsn: 'What are the benefits of using an accordion?',
        ans: 'Accordions help in organizing content, saving space on the UI, and improving user experience by allowing users to focus on specific sections of content.'
    },
    {
        id: 4,
        qsn: 'Can I customize the styles of an accordion?',
        ans: 'Yes, you can customize the styles of an accordion using CSS or styling libraries to match the look and feel of your application.'
    },
    {
        id: 5,
        qsn: 'Is it accessible to use accordions?',
        ans: 'Yes, with proper markup and ARIA roles, accordions can be made accessible to users with disabilities, ensuring they can navigate through the content effectively.'
    }
];
