import mongoose from 'mongoose';

const EducationSchema = new mongoose.Schema(
  {
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    year: { type: String, required: true },
    detail: { type: String }
  },
  { _id: false }
);

const TrainingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    provider: { type: String, required: true },
    period: { type: String, required: true },
    description: { type: String }
  },
  { _id: false }
);

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    period: { type: String, required: true },
    highlights: [{ type: String }]
  },
  { _id: false }
);

const SocialLinkSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    url: { type: String, required: true },
    icon: { type: String, default: '' }
  },
  { _id: false }
);

const ProfileSchema = new mongoose.Schema(
  {
    hero: {
      name: String,
      highlight: String,
      tagline: String,
      typingText: String,
      description: String,
      image: String
    },
    about: {
      objective: String,
      contact: [
        {
          label: String,
          value: String,
          href: String
        }
      ]
    },
    skills: {
      technical: [String],
      soft: [String],
      other: [String]
    },
    education: [EducationSchema],
    trainings: [TrainingSchema],
    projects: [ProjectSchema],
    socialLinks: [SocialLinkSchema],
    footer: {
      copyright: String
    }
  },
  { timestamps: true }
);

export default mongoose.model('Profile', ProfileSchema);

