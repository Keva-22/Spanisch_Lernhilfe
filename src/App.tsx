import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import AreaPage from './pages/AreaPage.tsx'
import FlashcardsPage from './pages/FlashcardsPage.tsx'
import GradePage from './pages/GradePage.tsx'
import HomePage from './pages/HomePage.tsx'
import MixTestPage from './pages/MixTestPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import ProgressPage from './pages/ProgressPage.tsx'
import TensesPage from './pages/TensesPage.tsx'
import TextTypePage from './pages/TextTypePage.tsx'
import TextTypesPage from './pages/TextTypesPage.tsx'
import TypingPage from './pages/TypingPage.tsx'
import UnitPage from './pages/UnitPage.tsx'
import VerbDrillPage from './pages/VerbDrillPage.tsx'
import VerbPage from './pages/VerbPage.tsx'
import VerbsPage from './pages/VerbsPage.tsx'
import VocabIndexPage from './pages/VocabIndexPage.tsx'
import VocabListPage from './pages/VocabListPage.tsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="grade/:grade" element={<GradePage />} />
        <Route path="area/:area" element={<AreaPage />} />
        <Route path="unit/:id" element={<UnitPage tab="overview" />} />
        <Route path="unit/:id/exercises" element={<UnitPage tab="exercises" />} />
        <Route path="unit/:id/test" element={<UnitPage tab="test" />} />
        <Route path="vocab" element={<VocabIndexPage />} />
        <Route path="vocab/:id" element={<VocabListPage />} />
        <Route path="vocab/:id/cards" element={<FlashcardsPage />} />
        <Route path="vocab/:id/type" element={<TypingPage />} />
        <Route path="tenses" element={<TensesPage />} />
        <Route path="verbs" element={<VerbsPage />} />
        <Route path="verbs/:verb" element={<VerbPage />} />
        <Route path="verb-drill" element={<VerbDrillPage />} />
        <Route path="text-types" element={<TextTypesPage />} />
        <Route path="text-types/:id" element={<TextTypePage />} />
        <Route path="mix" element={<MixTestPage />} />
        <Route path="progress" element={<ProgressPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
