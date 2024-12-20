'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Bell, Shield, TrendingUp, Lock, Video, HeadphonesIcon } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Leilões Ao Vivo',
    description: 'Participe de leilões em tempo real com transmissão ao vivo e lances instantâneos.',
    icon: Video,
  },
  {
    title: 'Alertas Personalizados',
    description: 'Receba notificações sobre itens de seu interesse assim que entrarem em leilão.',
    icon: Bell,
  },
  {
    title: 'Garantia de Autenticidade',
    description: 'Todos os itens são verificados por especialistas para garantir sua autenticidade.',
    icon: Shield,
  },
  {
    title: 'Histórico de Preços',
    description: 'Acesse o histórico de preços de itens similares para fazer lances informados.',
    icon: TrendingUp,
  },
  {
    title: 'Leilões Privados',
    description: 'Participe de leilões exclusivos com acesso restrito a membros VIP.',
    icon: Lock,
  },
  {
    title: 'Suporte Especializado',
    description: 'Nossa equipe de especialistas está disponível para ajudar em todas as etapas do processo.',
    icon: HeadphonesIcon,
  },
]

export default function Features() {
  return (
    <section id="recursos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#17181c] ">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
          Nossos Recursos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-white to-teal-50 dark:from-gray-800 dark:to-teal-950 border-teal-200 dark:border-teal-800 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="w-10 h-10 mb-4 text-teal-600 dark:text-teal-400" />
                  <CardTitle className="text-gray-900 dark:text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

