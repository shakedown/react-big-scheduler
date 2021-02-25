const DemoData = {
    resources: [
        {
            id: 'r0',
            name: 'Resource0',
            bgColor: 'red',
            issue: '#15'
        },
        {
            id: 'r1',
            name: 'Resource1',
            author: "Hiram test",
            bgColor: '#D9D9D9',
            issue: '#1'
        },
        {
            id: 'r2',
            name: 'Resource2',
            author: "Hiram test",
            issue: '#99'
        },
        {
            id: 'r3',
            name: 'Resource3',
            author: "Federico Osorio",
            issue: '#645'
        },
        {
            id: 'r4',
            name: 'Resource4',
            author: "Federico Osorio",
            issue: '#33'
        },
        {
            id: 'r5',
            name: 'Resource5',
            author: "Federico Osorio",
            issue: '#7'
        },
        {
            id: 'r6',
            name: 'Resource6',
            author: "Federico Osorio",
            issue: '#32'
        },
        {
            id: 'r7',
            name: 'Resource 7Resource7, Resource7Resource7Resource7 Resource7Resource7Resource7Resource7Resource7Resource7Resource7',
            author: "Federico Osorio",
            bgColor: '#FA9E95',
            issue: '#20'
        }
    ],
    events: [
        {
            id: 1,
            start: '2017-12-18 09:30:00',
            end: '2017-12-19 23:30:00',
            resourceId: 'r1',
            title: 'I am finished',
            label: 'QA Failed',
            img: 'https://miro.medium.com/fit/c/28/28/1*UJzclN5h-DYWjRyVqXThUw.png',
            bgColor: '#D9D9D9',
            showPopover: false
        },
        {
            id: 2,
            start: '2017-12-18 12:30:00',
            end: '2017-12-26 23:30:00',
            resourceId: 'r2',
            title: 'I am not resizable',
            label: 'Development',
            resizable: false
        },
        {
            id: 3,
            start: '2017-12-19 12:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r3',
            title: 'I am not movable',
            label: 'Development',
            movable: false
        },
        {
            id: 4,
            start: '2017-12-19 14:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r4',
            title: 'I am not start-resizable',
            label: 'QA Complete',
            startResizable: false,
        },
        {
            id: 5,
            start: '2017-12-19 15:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r5',
            title: 'I am not end-resizable',
            label: 'QA',
            endResizable: false
        },
        {
            id: 6,
            start: '2017-12-19 15:35:00',
            end: '2017-12-19 23:30:00',
            resourceId: 'r6',
            title: 'I am normal',
            label: 'To Do',
        },
        {
            id: 7,
            start: '2017-12-19 15:40:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r7',
            label: 'Development',
            title: 'I am exceptional',
            bgColor: '#FA9E95'
        },
        {
            id: 8,
            start: '2017-12-19 15:50:00',
            end: '2017-12-19 23:30:00',
            label: 'QA',
            resourceId: 'r0',
            title: 'I am locked',
            movable: false,
            resizable: false,
            bgColor: 'red'
        },
    ],
    eventsForTaskView: [
        {
            id: 1,
            start: '2017-12-18 09:30:00',
            end: '2017-12-18 23:30:00',
            resourceId: 'r1',
            title: 'I am finished',
            bgColor: '#D9D9D9',
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 2,
            start: '2017-12-18 12:30:00',
            end: '2017-12-26 23:30:00',
            resourceId: 'r2',
            title: 'I am not resizable',
            resizable: false,
            groupId: 2,
            groupName: 'Task2'
        },
        {
            id: 3,
            start: '2017-12-19 12:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r3',
            title: 'I am not movable',
            movable: false,
            groupId: 3,
            groupName: 'Task3'
        },
        {
            id: 7,
            start: '2017-12-19 15:40:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r7',
            title: 'I am exceptional',
            bgColor: '#FA9E95',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 4,
            start: '2017-12-20 14:30:00',
            end: '2017-12-21 23:30:00',
            resourceId: 'r4',
            title: 'I am not start-resizable',
            startResizable: false,
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 5,
            start: '2017-12-21 15:30:00',
            end: '2017-12-22 23:30:00',
            resourceId: 'r5',
            title: 'I am not end-resizable',
            endResizable: false,
            groupId: 3,
            groupName: 'Task3'
        },
        {
            id: 9,
            start: '2017-12-21 16:30:00',
            end: '2017-12-21 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 6,
            start: '2017-12-22 15:35:00',
            end: '2017-12-23 23:30:00',
            resourceId: 'r6',
            title: 'I am normal',
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 8,
            start: '2017-12-25 15:50:00',
            end: '2017-12-26 23:30:00',
            resourceId: 'r1',
            title: 'I am locked',
            movable: false,
            resizable: false,
            bgColor: 'red',
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 10,
            start: '2017-12-26 18:30:00',
            end: '2017-12-26 23:30:00',
            resourceId: 'r2',
            title: 'R2 has many tasks',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 11,
            start: '2017-12-27 18:30:00',
            end: '2017-12-27 23:30:00',
            resourceId: 'r14',
            title: 'R4 has many tasks',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 12,
            start: '2017-12-28 18:30:00',
            end: '2017-12-28 23:30:00',
            resourceId: 'r6',
            title: 'R6 has many tasks',
            groupId: 3,
            groupName: 'Task3'
        },
    ],
    eventsForCustomEventStyle: [
        {
            id: 1,
            start: '2017-12-18 09:30:00',
            end: '2017-12-19 23:30:00',
            resourceId: 'r1',
            title: 'I am finished',
            bgColor: '#D9D9D9',
            type: 1
        },
        {
            id: 2,
            start: '2017-12-18 12:30:00',
            end: '2017-12-26 23:30:00',
            resourceId: 'r2',
            title: 'I am not resizable',
            resizable: false,
            type: 2
        },
        {
            id: 3,
            start: '2017-12-19 12:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r3',
            title: 'I am not movable',
            movable: false,
            type: 3
        },
        {
            id: 4,
            start: '2017-12-19 14:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r4',
            title: 'I am not start-resizable',
            startResizable: false,
            type: 1
        },
        {
            id: 5,
            start: '2017-12-19 15:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r5',
            title: 'I am not end-resizable',
            endResizable: false,
            type: 2
        },
        {
            id: 6,
            start: '2017-12-19 15:35:00',
            end: '2017-12-19 23:30:00',
            resourceId: 'r6',
            title: 'I am normal',
            type: 3
        },
        {
            id: 7,
            start: '2017-12-19 15:40:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r7',
            title: 'I am exceptional',
            bgColor: '#FA9E95',
            type: 1
        },
        {
            id: 8,
            start: '2017-12-19 15:50:00',
            end: '2017-12-19 23:30:00',
            resourceId: 'r1',
            title: 'I am locked',
            movable: false,
            resizable: false,
            bgColor: 'red',
            type: 2
        },
        {
            id: 9,
            start: '2017-12-19 16:30:00',
            end: '2017-12-27 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 1',
            type: 3
        },
        {
            id: 10,
            start: '2017-12-20 18:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 2',
            type: 1
        },
        {
            id: 11,
            start: '2017-12-21 18:30:00',
            end: '2017-12-22 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 3',
            type: 2
        },
        {
            id: 12,
            start: '2017-12-23 18:30:00',
            end: '2017-12-27 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 4',
            type: 3
        },
    ],
}

export default DemoData
