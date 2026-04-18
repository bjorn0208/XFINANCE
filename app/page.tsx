'use client';

import { motion, AnimatePresence, useInView, animate } from 'motion/react';
import { Section } from '@/components/ui/Section';
import { 
  TrendingUp, 
  Target, 
  Lightbulb, 
  Briefcase, 
  BarChart, 
  Building2, 
  Users, 
  Siren, 
  Search, 
  MapPin, 
  BookOpen,
  Landmark,
  PiggyBank,
  Home,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { XFinanceLogo } from '@/components/ui/XFinanceLogo';
import { useEffect, useState, useRef } from 'react';

function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }: { value: number, prefix?: string, suffix?: string, decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => {
          if (ref.current) ref.current.textContent = `${prefix}${v.toFixed(decimals).replace('.', ',')}${suffix}`;
        }
      });
      return () => controls.stop();
    }
  }, [inView, value, prefix, suffix, decimals]);
  
  return <span ref={ref} className="tabular-nums font-bold tracking-tight">{prefix}0{suffix}</span>;
}

function AnimatedChart() {
  return (
    <div className="flex items-end gap-3 h-32 mb-8 justify-center border-b border-border pb-2 w-full px-4">
      {[35, 55, 45, 80, 65, 100].map((h, i) => (
        <div key={i} className="flex-1 w-12 h-full flex flex-col items-center justify-end gap-2 group">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
            className="w-full bg-border relative overflow-hidden"
          >
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
              className="absolute bottom-0 w-full bg-primary"
            />
          </motion.div>
          <div className="text-[10px] font-bold text-muted uppercase group-hover:text-primary transition-colors">Y{i+1}</div>
        </div>
      ))}
    </div>
  );
}

export default function Home_() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // 0: Hero
    <Section key="hero" id="hero" showWatermark={false} className="h-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
        <div className="space-y-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-none border border-border bg-card text-primary text-sm font-medium"
          >
            <span title="Ícone de Alerta: Insight Crítico de Mercado" className="inline-flex"><Siren className="w-4 h-4" /></span>
            <span>O combustível do crescimento</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-7xl font-light font-sans tracking-tight leading-none"
          >
            Especialistas em <br/>
            <span className="font-bold text-primary">
              Estruturação e Captação
            </span> <br/>
            de Crédito Empresarial
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted max-w-xl font-serif"
          >
            Conectando empresas ao capital que impulsiona crescimento.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:flex justify-center"
        >
          <XFinanceLogo className="w-full max-w-md text-foreground opacity-90" title="XFinance: Especialistas em estruturação e captação" />
        </motion.div>
      </div>
    </Section>,

    // 1: Contexto
    <Section key="contexto" id="contexto" className="h-full">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold font-sans">Contexto Econômico</h2>
        <p className="text-xl text-muted font-serif">Sem acesso a capital, as empresas não conseguem:</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
        {[
          { icon: TrendingUp, title: "Expandir", desc: "Ícone de Tendência: Representa crescimento e expansão" },
          { icon: Briefcase, title: "Investir", desc: "Ícone de Maleta: Representa investimentos e negócios" },
          { icon: Lightbulb, title: "Inovar", desc: "Ícone de Lâmpada: Representa ideias e inovação" },
          { icon: Target, title: "Competir", desc: "Ícone de Alvo: Representa competitividade e foco" }
        ].map((item, i) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card flex flex-col items-center justify-center text-center group hover:bg-card/80 transition-colors min-h-[220px]"
          >
            <div className="p-4 bg-border/40 text-primary mb-6 group-hover:-translate-y-1 transition-transform">
              <span title={item.desc} className="inline-flex"><item.icon className="w-8 h-8" /></span>
            </div>
            <h3 className="text-xl font-semibold tracking-wide uppercase font-sans">{item.title}</h3>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center w-full">
        <p className="text-xl md:text-2xl font-medium text-foreground glass-card inline-block font-serif p-6 bg-primary/5 border-primary/20 text-primary">
          O crédito é o combustível do crescimento empresarial!
        </p>
      </div>
    </Section>,

    // 2: Mercado
    <Section key="mercado" id="mercado" className="h-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold font-sans">O Mercado de Crédito no Brasil</h2>
          
          <AnimatedChart />

          <div className="grid gap-4">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} className="glass-card p-6 flex items-center gap-6">
              <div className="bg-border/60 p-3 text-primary"><span title="Ícone de Gráfico: Representa indicadores e estatísticas" className="inline-flex"><BarChart className="w-6 h-6" /></span></div>
              <div>
                <p className="text-sm text-muted mb-1 font-sans">Disponibilidade de crédito no Brasil</p>
                <div className="text-4xl lg:text-5xl font-black tracking-tight font-sans text-primary pt-1">
                  <AnimatedNumber value={5.5} decimals={1} prefix="R$ " suffix=" Tri+" />
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} transition={{ delay: 0.1}} className="glass-card p-6 flex items-center gap-6">
              <div className="bg-border/60 p-3 text-primary"><span title="Ícone de Prédio: Representa o setor corporativo e empresas" className="inline-flex"><Building2 className="w-6 h-6" /></span></div>
              <div>
                <p className="text-sm text-muted mb-1 font-sans">Crédito para empresas</p>
                <div className="text-4xl lg:text-5xl font-black tracking-tight font-sans text-primary pt-1">
                  <AnimatedNumber value={2} decimals={0} prefix="R$ " suffix=" Tri+" />
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} transition={{ delay: 0.2}} className="glass-card p-6 flex items-center gap-6">
              <div className="bg-border/60 p-3 text-primary"><span title="Ícone de Usuários: Representa o volume de pessoas ou empresas ativas" className="inline-flex"><Users className="w-6 h-6" /></span></div>
              <div>
                <p className="text-sm text-muted mb-1 font-sans">Empresas ativas no Brasil</p>
                <div className="text-4xl lg:text-5xl font-black tracking-tight font-sans text-primary pt-1">
                  <AnimatedNumber value={20} decimals={0} suffix=" Milhões+" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="glass-card p-8 space-y-6">
          <h3 className="text-2xl font-semibold border-b border-border pb-4 font-sans focus:outline-none">Quem são as empresas?</h3>
          <ul className="space-y-6">
            {[
              "Mais de 99% são micro, pequenas ou médias empresas",
              "Geram cerca de 60% dos empregos formais do país",
              "Parte significativa da atividade econômica"
            ].map((text, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                viewport={{ once: true }}
                className="flex items-start gap-4 text-lg text-muted font-serif"
              >
                <div className="mt-1 bg-primary text-primary-foreground p-1 shrink-0"><span title="Ícone de Verificação: Fato comprovado sobre empresas" className="inline-flex"><CheckCircle2 className="w-5 h-5" /></span></div>
                {text}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>,

    // 3: Paradoxo
    <Section key="problema" id="problema" className="h-full">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-6xl mx-auto py-2">
        
        {/* Left Column: Context */}
        <div className="text-center lg:text-left space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold font-sans">O Paradoxo do Crédito</h2>
          
          <div className="flex flex-col sm:flex-row items-stretch justify-center lg:justify-start gap-3 lg:gap-4 text-lg font-serif">
            <div className="glass-card p-4 flex-1 flex flex-col items-center text-center justify-center min-h-[100px]">
              <span className="text-muted mb-1 text-xs uppercase tracking-wider font-sans font-bold">Os Bancos</span>
              <span className="leading-tight">Possuem recursos<br/>disponíveis</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-primary font-black text-xl px-3 py-1 bg-primary/10 rounded-full border border-primary/20">VS</span>
            </div>
            <div className="glass-card p-4 flex-1 flex flex-col items-center text-center justify-center min-h-[100px]">
              <span className="text-muted mb-1 text-xs uppercase tracking-wider font-sans font-bold">As Empresas</span>
              <span className="leading-tight">Precisam de capital<br/>para crescer</span>
            </div>
          </div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-xl md:text-2xl tracking-wide font-semibold text-primary bg-primary/5 inline-block px-5 md:px-6 py-3 md:py-4 border border-primary/20 rounded-md"
          >
            Muitas operações não são aprovadas!
          </motion.div>
        </div>

        {/* Right Column: Problem List */}
        <div className="glass-card p-6 md:p-8 w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 h-full flex flex-col justify-center border-l-8 border-l-primary/80">
          <h3 className="text-xl md:text-2xl font-bold mb-6 font-sans text-foreground flex items-center gap-3">
            <span title="Ícone de Alvo: Representa o foco principal ou problema alvo" className="inline-flex"><Target className="text-primary w-6 md:w-8 h-6 md:h-8" /></span> O Problema do Mercado
          </h3>
          <div className="space-y-3 md:space-y-4">
            {[
              { num: "1", text: "Saber qual linha de crédito optar" },
              { num: "2", text: "Estruturar e apresentar adequadamente a operação" },
              { num: "3", text: "Acesso direto à instituição financeira alinhada ao perfil" }
            ].map((item) => (
              <div key={item.num} className="flex items-center gap-4 p-3 md:p-4 rounded-lg bg-background/40 hover:bg-background transition-colors border border-border">
                <span className="text-3xl md:text-4xl font-black text-primary/30 min-w-[2.5rem] md:min-w-[3rem] text-center">{item.num}</span>
                <span className="text-base md:text-lg font-medium font-serif leading-snug">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>,

    // 4: Solucao
    <Section key="solucao" id="solucao" className="h-full">
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-sans">O Surgimento de um Novo Mercado</h2>
        <p className="text-xl md:text-2xl text-muted font-serif leading-relaxed px-4">
          Poucos profissionais dominam análise de crédito, estruturação de operações e negociação com instituições financeiras!
        </p>
      </div>

      <div className="glass-card p-8 md:p-16 text-center relative overflow-hidden w-full max-w-5xl mx-auto">
        <h3 className="text-4xl font-black text-primary mb-8 relative z-10 font-sans tracking-tight">
          A Solução
        </h3>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-2xl md:text-3xl font-serif text-foreground relative z-10 mb-8">
          <span>A</span> 
          <XFinanceLogo className="h-8 w-auto inline-block text-primary py-1" title="Logotipo XFinance" /> 
          <span>nasce para <span className="text-primary font-bold">ocupar este espaço</span></span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 relative z-10">
          <div className="p-6 bg-background border border-border group hover:border-primary transition-colors">
            <span title="Ícone de Instituição: Representa nossa frente de estruturação financeira" className="inline-flex"><Landmark className="w-10 h-10 text-primary mx-auto mb-4 transition-transform group-hover:scale-110" /></span>
            <h4 className="text-lg font-semibold font-sans">Estruturação financeira</h4>
          </div>
          <div className="p-6 bg-background border border-border group hover:border-primary transition-colors">
            <span title="Ícone de Cofre: Representa nossa frente de captação de recursos" className="inline-flex"><PiggyBank className="w-10 h-10 text-primary mx-auto mb-4 transition-transform group-hover:scale-110" /></span>
            <h4 className="text-lg font-semibold font-sans">Captação de crédito</h4>
          </div>
          <div className="p-6 bg-background border border-border group hover:border-primary transition-colors">
            <span title="Ícone Acadêmico: Representa nossa frente de treinamento de agentes" className="inline-flex"><GraduationCap className="w-10 h-10 text-primary mx-auto mb-4 transition-transform group-hover:scale-110" /></span>
            <h4 className="text-lg font-semibold font-sans">Formação de profissionais</h4>
          </div>
        </div>
      </div>
    </Section>,

    // 5: Diferencial
    <Section key="diferencial" id="diferencial" className="h-full max-w-5xl mx-auto w-full">
      <h2 className="text-3xl md:text-5xl font-bold font-sans text-center mb-16">Diferencial Competitivo</h2>
      <div className="space-y-6">
        {[
          "Vivência real dentro do sistema bancário",
          "Mais de 15 anos de experiência em gestão bancária",
          "Expertise em critérios reais de aprovação, análise de risco e estruturação de operações aprováveis"
        ].map((text, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 flex items-center gap-6 md:gap-8"
          >
            <div className="text-5xl font-black text-primary/30 min-w-16 text-center font-sans">{i + 1}</div>
            <div className="text-xl md:text-2xl font-serif font-medium text-foreground">{text}</div>
          </motion.div>
        ))}
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 text-center p-8 border border-border bg-background"
      >
        <p className="text-xl md:text-2xl font-serif">
          Aliado à experiência de mercado e network de{' '}
          <strong className="text-primary font-black uppercase tracking-wide inline-block mt-2 md:mt-0">Marcelo Rocha</strong>
        </p>
      </motion.div>
    </Section>,

    // 6: O Que Fazemos
    <Section key="o-que-fazemos" id="o-que-fazemos" className="h-full">
      <h2 className="text-3xl md:text-5xl font-bold font-sans text-center mb-8">O que fazemos?</h2>
      <p className="text-xl text-center text-muted font-serif max-w-3xl mx-auto mb-16 px-4">
        Além da operação direta em crédito empresarial, criamos um <strong className="text-foreground">Programa de Formação Profissional</strong>.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
        <div className="glass-card p-8 md:p-10 border-t-8 border-t-primary border-l-0">
          <h3 className="text-2xl font-bold mb-8 font-sans">1. Captação de crédito</h3>
          <ul className="space-y-6">
            {[
              "Capital de Giro",
              "Antecipação de Recebíveis",
              "Crédito Imobiliário",
              "Crédito com Garantia"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-lg font-serif">
                <span title="Ícone de Confirmação: Representa um critério ensinado no módulo" className="inline-flex"><CheckCircle2 className="text-primary w-6 h-6 shrink-0" /></span> {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="glass-card p-8 md:p-10 border-t-8 border-t-primary border-l-0 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6 font-sans">2. Estruturação Financeira</h3>
          <p className="text-xl text-muted font-serif leading-relaxed">
            Preparando a base sólida das empresas para serem atraentes no mercado de crédito e garantirem as melhores negociações.
          </p>
        </div>
      </div>
    </Section>,

    // 7: Treinamento
    <Section key="treinamento" id="treinamento" className="h-full max-w-6xl mx-auto w-full">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-sans">O que o treinamento ensina?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { num: 1, text: "Como os bancos analisam empresas" },
          { num: 2, text: "Como estruturar operações aprováveis" },
          { num: 3, text: "Como captar empresas clientes" },
          { num: 4, text: "Como apresentar propostas viáveis" },
          { num: 5, text: "Como rentabilizar estruturando crédito" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`glass-card p-8 flex flex-col items-center justify-center text-center group border-l-0 border-t-4 border-t-border hover:border-t-primary transition-colors ${i === 4 ? 'lg:col-span-2' : ''}`}
          >
            <div className="w-14 h-14 bg-border/60 text-primary flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              {item.num}
            </div>
            <h4 className="text-lg md:text-xl font-medium font-serif leading-tight">{item.text}</h4>
          </motion.div>
        ))}
      </div>
    </Section>,

    // 8: Sobre
    <Section key="sobre" id="sobre" className="h-full max-w-6xl mx-auto w-full">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="glass-card p-8 space-y-6 flex flex-col">
          <h3 className="text-2xl font-bold text-primary flex items-center gap-3 font-sans">
            <span title="Ícone de Grupo: Representa o nosso público de franqueados e agentes" className="inline-flex"><Users className="w-7 h-7" /></span> Público Alvo
          </h3>
          <ul className="space-y-4 font-serif text-muted text-lg flex-1">
            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary"/> Empresário</li>
            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary"/> Consultores</li>
            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary"/> Contadores</li>
            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary"/> Advogados</li>
            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary"/> Profissionais comerciais</li>
          </ul>
          <p className="pt-6 border-t border-border text-sm font-serif italic text-muted">
            Qualquer pessoa que queira atuar em um mercado altamente rentável e pouco dominado.
          </p>
        </div>

        <div className="glass-card p-8 space-y-6 flex flex-col">
          <h3 className="text-2xl font-bold text-primary flex items-center gap-3 font-sans">
            <span title="Ícone de Alvo: Representa a visão de alcance da marca" className="inline-flex"><Target className="w-7 h-7" /></span> Visão
          </h3>
          <div className="space-y-4 text-lg font-serif">
            <p className="leading-relaxed">
              Criar uma rede nacional de especialistas em captação de crédito empresarial.
            </p>
            <p className="text-muted leading-relaxed">
              Profissionais preparados para conectar empresas ao capital que elas precisam para crescer.
            </p>
          </div>
        </div>

        <div className="glass-card p-8 space-y-6 flex flex-col">
          <h3 className="text-2xl font-bold text-primary flex items-center gap-3 font-sans">
            <span title="Ícone de Localização: Representa a expansão territorial" className="inline-flex"><MapPin className="w-7 h-7" /></span> Expansão
          </h3>
          <div className="space-y-4 text-lg font-serif">
            <p className="leading-relaxed">
              Configurações com modelo e estrutura de trabalho padronizado em todas as unidades do Brasil.
            </p>
            <p className="text-muted leading-relaxed">
              Gerando imponência e autoridade, otimizando o fluxo nas negociações.
            </p>
          </div>
        </div>
      </div>
    </Section>,

    // 9: Final
    <Section key="final" id="final" showWatermark={false} className="h-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto h-full">
        <div className="space-y-8 relative z-10 flex flex-col justify-center h-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-none border border-border bg-card text-primary text-sm font-medium w-fit"
          >
            <span title="Ícone de Lâmpada: Representa a iluminação ou visão de negócio inovadora" className="inline-flex"><Lightbulb className="w-4 h-4" /></span>
            <span>A Visão do Negócio</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light font-sans tracking-tight leading-none"
          >
            O crédito existe.<br/>
            <span className="text-muted text-3xl md:text-4xl lg:text-5xl border-l-4 border-border pl-4 my-4 block">
              O que falta é quem saiba estruturá-lo.
            </span>
            <span className="font-bold text-primary block mt-4">Nós sabemos.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-xl text-muted font-serif">
              Se fizerem apenas captação, vocês serão operacionais.
            </p>
            <p className="text-xl font-serif">
              Se fizerem <strong className="text-primary font-bold">captação + formação</strong>, vocês criam:
            </p>
            
            <div className="inline-block mt-4 w-full px-5 py-5 border-l-4 border-primary bg-primary/5 tracking-[0.05em] md:tracking-[0.1em] uppercase text-lg md:text-2xl font-black text-primary leading-tight shadow-[0_0_40px_rgba(234,88,12,0.05)]">
              RECEITA DE CONSULTORIA, RECEITA DE TREINAMENTO E REDE COMERCIAL ESPALHADA PELO PAÍS.
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <XFinanceLogo className="w-full max-w-lg text-foreground opacity-90 relative z-10" title="Assinatura XFinance" />
        </motion.div>
      </div>
    </Section>,

    // 10: Obrigado
    <Section key="obrigado" id="obrigado" className="h-full text-center w-full">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center space-y-12 max-w-4xl mx-auto h-full"
      >
        <XFinanceLogo className="w-full max-w-3xl text-foreground drop-shadow-sm mb-4" title="Marca XFinance" />
        
        <p className="text-xl md:text-2xl text-muted font-serif max-w-3xl text-center leading-relaxed italic border-l-4 border-primary pl-6 bg-primary/5 p-4 rounded-r-lg">
          "Agora é simples: ou você volta pra rotina, ou começa a gerar resultado. O próximo movimento define tudo."
        </p>

        <h2 className="text-5xl md:text-7xl font-sans font-black tracking-widest text-primary uppercase mt-12 pt-8 border-t border-border w-full">
          Obrigado
        </h2>
      </motion.div>
    </Section>
  ];

  const nextSlide = () => setCurrentSlide(p => Math.min(p + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide(p => Math.max(p - 0 - 1, 0));
  const goToSlide = (idx: number) => setCurrentSlide(idx);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setCurrentSlide(p => Math.min(p + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide(p => Math.max(p - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  return (
    <main className="h-screen w-screen overflow-hidden bg-background text-foreground relative selection:bg-primary/30 selection:text-primary-foreground font-sans flex flex-col">
      
      {/* Invisible Click Overlays for Slide Navigation */}
      <div 
        className="fixed inset-y-0 left-0 w-[15vw] z-40 cursor-w-resize" 
        onClick={prevSlide}
        aria-label="Voltar slide"
        role="button"
      />
      <div 
        className="fixed inset-y-0 right-0 w-[15vw] z-40 cursor-e-resize" 
        onClick={nextSlide}
        aria-label="Avançar slide"
        role="button"
      />

      {/* Fixed Navbar mapping to slides */}
      <motion.nav 
        className="fixed top-0 inset-x-0 z-50 bg-background/95 border-b border-border py-4 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button onClick={() => goToSlide(0)} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <XFinanceLogo className="h-8 w-auto text-primary" title="Logotipo XFinance: Clique para voltar ao primeiro slide" />
          </button>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted">
            <button onClick={() => goToSlide(1)} className={`hover:text-foreground transition-colors uppercase tracking-widest text-[11px] font-bold ${currentSlide === 1 ? 'text-primary' : ''}`}>Contexto</button>
            <button onClick={() => goToSlide(2)} className={`hover:text-foreground transition-colors uppercase tracking-widest text-[11px] font-bold ${currentSlide === 2 ? 'text-primary' : ''}`}>Mercado</button>
            <button onClick={() => goToSlide(4)} className={`hover:text-foreground transition-colors uppercase tracking-widest text-[11px] font-bold ${currentSlide === 4 ? 'text-primary' : ''}`}>Solução</button>
            <button onClick={() => goToSlide(7)} className={`hover:text-foreground transition-colors uppercase tracking-widest text-[11px] font-bold ${currentSlide === 7 ? 'text-primary' : ''}`}>Treinamento</button>
          </div>
        </div>
      </motion.nav>

      <div className="flex-1 mt-[80px] w-full h-[calc(100vh-80px)] relative overflow-hidden bg-background">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="w-full h-full absolute inset-0 overflow-y-auto overflow-x-hidden"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Footer & Navigation Controls */}
      <div className="fixed bottom-0 inset-x-0 h-16 pointer-events-none z-50 px-6 md:px-12 flex items-center justify-between">
        
        <div className="text-muted font-serif text-sm tracking-widest bg-background/80 px-4 py-2 border border-border border-b-0 pointer-events-auto">
          SLIDE {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-3 bg-background border border-border text-primary hover:bg-card hover:border-primary disabled:opacity-30 disabled:hover:border-border transition-colors group flex items-center justify-center gap-2 border-b-0"
          >
            <span title="Ícone de Seta: Retornar ao slide anterior" className="inline-flex"><ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /></span>
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-3 bg-background border border-border text-primary hover:bg-card hover:border-primary disabled:opacity-30 disabled:hover:border-border transition-colors group flex items-center justify-center gap-2 border-b-0"
          >
            <span title="Ícone de Seta: Avançar para o próximo slide" className="inline-flex"><ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
          </button>
        </div>
        
      </div>
      
    </main>
  );
}
