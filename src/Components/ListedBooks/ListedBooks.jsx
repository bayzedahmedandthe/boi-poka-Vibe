import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
    const bookData = useLoaderData();
    useEffect(() => {
        fetch('')
    }, [])
    return (
        <div>
            <div className='bg-base-200 w-full py-4 rounded-lg font-bold text-2xl text-center my-10'>Books</div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>WishList</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;