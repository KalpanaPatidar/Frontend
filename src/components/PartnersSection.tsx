import { partners } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from './CountUp.tsx'
export function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted Partners</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Our Industry Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Connecting you with leading companies across various industries for meaningful internship experiences
          </p>
        </motion.div>

        {/* Partner Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-card border border-border/60 rounded-xl p-6 h-24 flex items-center justify-center shadow-card hover:shadow-glow transition-all duration-300 group-hover:border-primary/30">
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="ml-2 font-semibold text-sm text-foreground group-hover:text-primary transition-smooth">
                    <a href={partner.url} target="_blank" rel="noopener noreferrer">{partner.name}</a>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              <CountUp
                from={0}
                to={2000}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
            </div>
            <p className="text-muted-foreground">Partner Companies</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              <CountUp
                from={0}
                to={50}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />+
            </div>
            <p className="text-muted-foreground">Industry Domains</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              <CountUp
                from={0}
                to={95}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />%
            </div>
            <p className="text-muted-foreground">Success Rate</p>
          </div>
        </motion.div>

        {/* Partnership Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-card rounded-2xl p-8 border border-border/60 shadow-card"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center md:text-left">
              <Badge variant="secondary" className="bg-success/10 text-success mb-3">
                Verified Partners
              </Badge>
              <h3 className="font-semibold text-foreground mb-2">Quality Assurance</h3>
              <p className="text-sm text-muted-foreground">
                All partners are verified and meet our quality standards for internship programs.
              </p>
            </div>
            <div className="text-center md:text-left">
              <Badge variant="secondary" className="bg-info/10 text-info mb-3">
                Direct Access
              </Badge>
              <h3 className="font-semibold text-foreground mb-2">Streamlined Applications</h3>
              <p className="text-sm text-muted-foreground">
                Apply directly through our platform with one-click applications to multiple partners.
              </p>
            </div>
            <div className="text-center md:text-left">
              <Badge variant="secondary" className="bg-warning/10 text-warning mb-3">
                Mentorship
              </Badge>
              <h3 className="font-semibold text-foreground mb-2">Guided Support</h3>
              <p className="text-sm text-muted-foreground">
                Get mentorship and guidance from industry professionals throughout your internship.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
