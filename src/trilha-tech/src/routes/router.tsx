
import { createBrowserRouter } from 'react-router-dom'

// Importing components

import {Dashboard} from '../pages/Dashboard'
import {CourseLevelSelection} from '../components/CourseLevelSelection'
import { ContentSelection } from '../components/ContentSelection'
import { Content } from '../components/Content'
import { NotFound } from '../pages/NotFound'
import { DiscoverCourses } from '../components/DiscoverCourses'

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "CourseLevel/:course",
                element: <CourseLevelSelection />
            },
            {
                path: "ContentSelection/:level",
                element: <ContentSelection />,
            },
            {
                path: "/ContentSelection/:level/Content/:id",
                element: <Content />
            },
            {
                path: "",
                element: <DiscoverCourses />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }

])