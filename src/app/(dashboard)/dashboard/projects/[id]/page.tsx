'use client'

import { useParams, useRouter } from 'next/navigation'
import { ProjectHeader } from '@/components/projects/detail/ProjectHeader'
import { ProjectTimeline } from '@/components/projects/detail/ProjectTimeline'
import { ProjectActions } from '@/components/projects/detail/ProjectActions'
import { ClientValidationStatus } from '@/components/projects/detail/ClientValidationStatus'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Mock data
const mockProject = {
  id: '1',
  title: 'Site E-commerce Mode',
  description: 'Boutique en ligne pour vêtements et accessoires de mode',
  status: 'in_progress' as const,
  template: 'E-commerce',
  clientName: 'Fashion Store SAS',
  clientEmail: 'contact@fashionstore.com',
  createdAt: '2024-01-15',
  updatedAt: '2024-01-25',
  progress: 65,
  content: '<h1>Cahier des charges</h1><p>Contenu du projet...</p>',
}

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()

  return (
    <div className="space-y-6">
      {/* Header */}
      <ProjectHeader project={mockProject} />

      {/* Actions */}
      <ProjectActions projectId={params.id as string} />

      {/* Content */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="validation">Validation Client</TabsTrigger>
          <TabsTrigger value="content">Contenu</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Informations du projet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Client</p>
                  <p className="text-lg">{mockProject.clientName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="text-lg">{mockProject.clientEmail}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Template</p>
                  <p className="text-lg">{mockProject.template}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Créé le</p>
                  <p className="text-lg">{new Date(mockProject.createdAt).toLocaleDateString('fr-FR')}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{mockProject.description}</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline">
          <ProjectTimeline projectId={params.id as string} />
        </TabsContent>

        {/* Validation Tab */}
        <TabsContent value="validation">
          <ClientValidationStatus projectId={params.id as string} />
        </TabsContent>

        {/* Content Tab */}
        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Contenu du CDC</CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: mockProject.content }}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}